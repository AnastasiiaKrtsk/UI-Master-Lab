import { useEffect, useReducer } from 'react';

type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type State = {
  cartItems: Product[];
  totalAmount: number;
  totalItems: number;
};

type Action =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'UPDATE_ITEM'; payload: { id: string; quantity: number } };

const products = [
  { id: '1', name: 'React Course', price: 10, quantity: 0 },
  { id: '2', name: 'Js Course', price: 30, quantity: 0 },
  { id: '3', name: 'Ts Course', price: 5, quantity: 0 },
];

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { payload } = action;

      const existingItemIndex = state.cartItems.findIndex(
        (p) => p.id === action.payload.id,
      );

      const cartItems =
        existingItemIndex >= 0
          ? state.cartItems.map((el, i) =>
              i === existingItemIndex
                ? { ...el, quantity: el.quantity + 1 }
                : el,
            )
          : [...state.cartItems, { ...payload, quantity: 1 }];
      return {
        ...state,
        cartItems,
        totalItems: cartItems.reduce((acc, item) => acc + item.quantity, 0),
        totalAmount: cartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        ),
      };
    }
    case 'REMOVE_ITEM': {
      const { id } = action.payload;
      const filteredItems = state.cartItems.filter((el) => el.id !== id);
      return {
        ...state,
        cartItems: filteredItems,
        totalItems: filteredItems.reduce((acc, item) => acc + item.quantity, 0),
        totalAmount: filteredItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        ),
      };
    }
    case 'UPDATE_ITEM': {
      const { id, quantity } = action.payload;
      if (action.payload.quantity === 0) {
        return reducer(state, { type: 'REMOVE_ITEM', payload: { id: id } }); //! RED FLAG PATTERN
      }

      const updatedItems = state.cartItems.map((el) =>
        el.id === id ? { ...el, quantity: quantity } : el,
      );

      return {
        ...state,
        cartItems: updatedItems,
        totalItems: updatedItems.reduce((acc, item) => acc + item.quantity, 0),
        totalAmount: updatedItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        ),
      };
    }
    default:
      return state;
  }
};

//?lazy loading
function init() {
  const saved = localStorage.getItem('cart');

  return saved
    ? JSON.parse(saved)
    : {
        cartItems: [],
        totalItems: 0,
        totalAmount: 0,
      };
}
export const ReducerNextLevel = () => {
  //?undefined is an 'initialValue' to 'init'
  const [state, dispatch] = useReducer(reducer, undefined, init);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return (
    <div>
      <ul className="flex flex-col gap-1 border border-amber-400 p-4 mb-10">
        {products.map((p) => (
          <div className="flex justify-between gap" key={p.id}>
            <li className="flex gap-2">
              <span>{p.name} - </span>
              <span className="text-amber-300">${p.price}</span>
            </li>
            <button
              className=" bg-violet-700 py-1 px-3 hover:bg-violet-600 hover:cursor-pointer rounded-sm"
              onClick={() => {
                dispatch({ type: 'ADD_ITEM', payload: p });
              }}
            >
              Add
            </button>
          </div>
        ))}
      </ul>

      <div>
        <div className="flex justify-between">
          <p>totalItems: {state.totalItems}</p>
          <p>totalAmount: ${state.totalAmount}</p>
        </div>
        {state.cartItems.length === 0 ? (
          <p className="text-center mt-3">Your cart is empty</p>
        ) : (
          <div className="mt-3">
            {state.cartItems.map((el) => (
              <div
                className="grid grid-cols-[1fr_auto_auto] items-center gap-3 py-2"
                key={el.id}
              >
                <p>
                  {el.name} - ${el.price} x {el.quantity}
                </p>

                <div className="flex gap-1">
                  <button
                    className=" bg-violet-700 py-1 px-3 hover:bg-violet-600 hover:cursor-pointer rounded-sm"
                    onClick={() => {
                      dispatch({
                        type: 'UPDATE_ITEM',
                        payload: { id: el.id, quantity: el.quantity - 1 },
                      });
                    }}
                  >
                    -
                  </button>
                  <button
                    className=" bg-violet-700 py-1 px-3 hover:bg-violet-600 hover:cursor-pointer rounded-sm"
                    onClick={() => {
                      dispatch({
                        type: 'UPDATE_ITEM',
                        payload: { id: el.id, quantity: el.quantity + 1 },
                      });
                    }}
                  >
                    +
                  </button>
                </div>

                <button
                  className=" bg-orange-800 py-1 px-3 hover:bg-orange-700 hover:cursor-pointer rounded-sm"
                  onClick={() => {
                    dispatch({ type: 'REMOVE_ITEM', payload: { id: el.id } });
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

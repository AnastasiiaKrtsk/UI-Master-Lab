import { ContextChild } from './ContextChild';
import { ContextProviderComponent } from './ContextProviderComponent';

export const ContextHookApp = () => {
  return (
    <ContextProviderComponent>
      <h2 className="text-3xl">ContextApp</h2>
      <div>children here</div>
      <ContextChild />
    </ContextProviderComponent>
  );
};

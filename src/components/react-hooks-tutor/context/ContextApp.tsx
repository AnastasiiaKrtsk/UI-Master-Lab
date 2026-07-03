import { ContextProviderComponent } from './ContextProviderComponent';
import { ContextChild } from './ContextChild';

export const ContextApp = () => {
  return (
    <ContextProviderComponent>
      <h2 className="text-3xl">ContextApp</h2>
      <div>children here</div>
      <ContextChild />
    </ContextProviderComponent>
  );
};

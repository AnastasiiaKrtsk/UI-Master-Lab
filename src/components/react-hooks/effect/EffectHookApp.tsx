import {
  CleanUpApp,
  EmptyDependency,
  NoDependency,
  SetDependency,
} from './EffectBasics';

export const EffectHookApp = () => {
  return (
    <div>
      <NoDependency />
      <EmptyDependency />
      <SetDependency />
      <CleanUpApp />
    </div>
  );
};

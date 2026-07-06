import {
  SetDependency,
  NoDependency,
  EmptyDependency,
  CleanUpApp,
} from './effectBasics';

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

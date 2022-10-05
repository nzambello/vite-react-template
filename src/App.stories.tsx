import App from './App';

export const Button = () => <button>My Button</button>;
Button.storyName = 'Button';
Button.decorators = [
  (Component) => (
    <div style={{ margin: '3em' }}>
      <Component />
    </div>
  )
];

export const MyStory = () => <div>My Story</div>;
MyStory.storyName = 'Example Story';

MyStory.decorators = [
  (Component) => (
    <div style={{ margin: '3em' }}>
      <Component />
    </div>
  )
];

export const AppStory = () => <App />;
AppStory.storyName = 'App render';

AppStory.decorators = [
  (Component) => (
    <div style={{ margin: '3em' }}>
      <Component />
    </div>
  )
];

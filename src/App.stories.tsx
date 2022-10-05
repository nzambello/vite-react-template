import React from 'react';
import App from './App';

export const Button = () => <button>My Button</button>;
Button.storyName = 'Button';

export const MyStory = () => <div>My Story</div>;
MyStory.storyName = 'Example Story';

export const AppStory = () => <App />;
AppStory.storyName = 'App render';

const App = () => (
  <div css={{ background: 'red' }}>
    FUCK.
  </div>
);

interface AppSpaceProps {
  children: React.ReactNode;
}

// build css style's name `.css-1pwy40v-App.Space` but not `.css-1pwy40v-App\.Space`
App.Space = ({ children }: AppSpaceProps) => (
  <div css={{ padding: '10px', background: 'green' }}>{children}</div>
);

export default App

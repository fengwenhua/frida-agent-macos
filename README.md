### How to compile & load

```bash
git clone git://github.com/fengwenhua/frida-agent-macos.git
cd frida-agent-macos/
pnpm install
pnpm run build
```

```bash
python3 main.py
```

### Development workflow

To continuously recompile on change, keep this running in a terminal:

```bash
pnpm run watch
```

And use an editor like Visual Studio Code for code completion and instant
type-checking feedback.

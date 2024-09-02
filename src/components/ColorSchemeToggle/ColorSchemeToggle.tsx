import { Button, Group, useMantineColorScheme } from '@mantine/core';

export default function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group gap={5} visibleFrom="xs">
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
    </Group>
  );
}

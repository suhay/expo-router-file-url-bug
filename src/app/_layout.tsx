import { Stack } from 'expo-router'
import seedrandom from 'seedrandom'

export const defaultValues = {
  seed: JSON.stringify(seedrandom(undefined, { state: true }).state()),
}

export const localStore = {
  seed: defaultValues.seed,
}

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' />
    </Stack>
  )
}

import { useEffect } from 'react'
import { Stack } from 'expo-router'
import colors from '@/assets/colors'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

export default function RootLayout() {
  const [loaded] = useFonts({
    // prettier-ignore
    'Nippo-Variable': require('../assets/fonts/Nippo-Variable.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        // headerTintColor: 'black',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        //   fontFamily: 'Nippo-Variable',
        // },
      }}
    />
  )
}

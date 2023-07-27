import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  theme,
  Flex
} from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'

import AlarmClock from '../../assets/svg/alarm-clock.svg'

export const Skipped = ({
  rejoinQueue,
}) => {
  const { t, lang } = useTranslation('common')

  return <>
    <Center>
      <Flex direction="column" >
        <AlarmClock
          className="featured-image"
        />
      </Flex>

    </Center>
    <Box
      layerStyle="card"
    >
      <Text
        my={6}
        textStyle="body1"
        textAlign="center"
      >
        {t('your-queue-number-was')}
      </Text>
    </Box>

    <Button
      bgColor="primary.500"
      borderRadius="3px"
      width="100%"
      color="white"
      size="lg"
      variant="solid"
      marginTop="2rem"
      onClick={rejoinQueue}
    >
      {t('rejoin-the-queue')}
    </Button>
  </>
}

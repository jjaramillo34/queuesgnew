import {
  Heading,
  Center,
  Box,
  Button
} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import queryString from 'query-string'

import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/Navbar'

import PeopleOnPhones from '../assets/svg/people-on-phones.svg'
import { API_ENDPOINT } from '../constants'

const Index = () => {
  const { t, lang } = useTranslation('common')
  const [queuePendingUrl, setQueuePendingUrl] = useState('')

  useEffect(() => {
    const query = queryString.parse(location.search)

    if (query.board_id) {
      getBoardLists(query.board_id)
    } else {
      //  Defaults to board id in the netlify env
      getBoardLists(process.env.NEXT_PUBLIC_TRELLO_BOARD_ID || '')
    }
  }, [])

  /**
   *  Gets a board with lists
   */
  const getBoardLists = async (boardId) => {
    if (boardId) {
      try {
        const boardLists = await axios.get(`${API_ENDPOINT}/view?type=boardlists&board=${boardId}`)
        boardLists.data.forEach(list => {
          if (list.name.indexOf('[PENDING]') > -1) {
            setQueuePendingUrl(location.origin + `/queue?id=${list.id}`)
          }
        })
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <Container>
      <NavBar />
      <Main>
        <Box>
          <Heading
            textStyle="heading3"
            textAlign="center"
            mb={8}
          >
            {t('demo-title')}
          </Heading>
          <Center>
            <PeopleOnPhones
              className="featured-image"
            />
          </Center>
          {/* <Center
            mt="4rem"
          >
            <Link
              href={`${queuePendingUrl}`}
            >
              <Button
                bgColor="primary.500"
                borderRadius="3px"
                width="100%"
                color="white"
                size="lg"
                variant="solid"
                type="submit"
              >
                {t('try-the-demo')}
              </Button>
            </Link>
          </Center> */}
        </Box>
      </Main>
      <Footer />
    </Container>
  )
}

export default Index

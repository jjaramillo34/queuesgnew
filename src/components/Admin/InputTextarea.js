import {
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea
} from '@chakra-ui/react'

const Index = ({
  id,
  label,
  helperText,
  value,
  onChange,
  style
}) => {
  return (
    <Flex
      pt="0.5rem"
      pb="0.5rem"
      {...style}
      >
      <FormControl id={id}>
        <FormLabel>{label}</FormLabel>
        <Textarea value={value} onChange={onChange} />
        {
          helperText
          ?
          <FormHelperText>{helperText}</FormHelperText>
          :
          null
        }
      </FormControl>
    </Flex>
  )
}

export default Index
import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    Center,
    HStack,
    Input,
    Link,
    Stack,
    Text,
} from '@chakra-ui/react'
import { useState } from 'react'


const initialData = {

    email: '',
    password: '',

}


const Login = () => {
    const [data, setData] = useState(initialData)


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://blogs-backend-iffz.onrender.com/api/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            alert('Logged in successfully!')
        })
    }




    return <>
        <Center>
            <Container  m={{ base: '0', sm: '8' }} maxW="lg" py={{ base: '10', md: '20' }} px={{ base: '0', sm: '8' }} boxShadow={{ base: 'none', sm: 'md' }}
                borderRadius={{ base: 'none', sm: 'xl' }}>
                <Stack spacing="8">
                    <Stack spacing="6">
                        {/* <Logo /> */}
                        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                            <Heading size={{ base: 'xs', md: 'xl' }}>Sign into your account</Heading>
                            <Text color="fg.muted">
                                Don't have an account? <Link href="#">Sign up</Link>
                            </Text>
                        </Stack>
                    </Stack>
                    <Box
                        py={{ base: '0', sm: '4' }}
                        px={{ base: '4', sm: '10' }}
                        bg={{ base: 'transparent', sm: 'bg.surface' }}
                        // boxShadow={{ base: 'none', sm: 'md' }}
                        // borderRadius={{ base: 'none', sm: 'xl' }}
                    >
                        <Stack spacing="6">


                            <Stack spacing="5">
                                <FormControl>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input id="email" type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                                </FormControl>
                            </Stack>
                            <Stack spacing="5">
                                <FormControl>
                                    <FormLabel htmlFor="email">Password</FormLabel>
                                    <Input id="email" type="email" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                                </FormControl>
                            </Stack>

                            <HStack justify="space-between">
                                <Checkbox defaultChecked>Remember me</Checkbox>
                                <Button variant="text" size="sm">
                                    Forgot password?
                                </Button>
                            </HStack>
                            <Stack spacing="6">
                                <Button onClick={handleSubmit}>Log In</Button>
                                <HStack>
                                    <Divider />
                                    <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                                        or continue with
                                    </Text>
                                    <Divider />
                                </HStack>

                            </Stack>
                        </Stack>
                    </Box>
                </Stack>

            </Container >
        </Center>
    </>
}
export default Login
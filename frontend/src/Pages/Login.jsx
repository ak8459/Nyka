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
    useToast
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../Redux/AuthReduxer/action'

import { Link as RouterLink, useNavigate } from 'react-router-dom'; // If you're using React Router, import Link from react-router-dom


const initialData = {
    email: '',
    password: '',
}
// email: 'akash@gmail.com',
//     password: 'akash123',
const Login = () => {
    const [data, setData] = useState(initialData)
    const dispatch = useDispatch();
    const toast = useToast();
    let navigate = useNavigate();
    const userInfo = useSelector((state) => state.authReducer)
    // console.log(userInfo)
    const handleSubmit = (e) => {
        e.preventDefault()
     
            dispatch(login(data))

            toast({
                title: 'Login Successful',
                description: 'Logged in successfully!',
                status: 'success',
                duration: 3000, // Display duration in milliseconds
                isClosable: true,
            });
            setTimeout(() => {
                navigate('/dashboard')
            }, 500)
        
        // navigate('/dashboard')
    }

    return <>
        <Center>
            <Container m={{ base: '0', sm: '8' }} maxW="lg" py={{ base: '10', md: '20' }} px={{ base: '0', sm: '8' }} boxShadow={{ base: 'none', sm: 'md' }}
                borderRadius={{ base: 'none', sm: 'xl' }}>
                <Stack spacing="8">
                    <Stack spacing="6">
                        {/* <Logo /> */}
                        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                            <Heading size={{ base: 'xs', md: 'xl' }}>Sign into your account</Heading>
                            <Text color="fg.muted">
                                Don't have an account? <Link as={RouterLink} to="/register">Sign up</Link>
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
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                    <Input id="password" type="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
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
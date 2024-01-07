// import { Input, Flex, Box, Select, Button, border } from '@chakra-ui/react';
import {
    Input, Flex, Image, Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Select
} from '@chakra-ui/react';
import { Container, Stack, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://nykabackend.onrender.com/api/products')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])
    console.log(data);

    return (
        <div >
            <div className='top' style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <Input type='email' placeholder='Search' borderColor={'gray'} w={'600px'} borderRadius={'0px'} bg={'white'} p={'10px'} />
                </div>
                <div className='img-div'>
                    <img src="../img/imgw.jpg" style={{ width: '35px', height: '35px' }} alt="not found!" />
                </div>


            </div>
            <section className='bottom' style={{ marginTop: '40px' }}>
                <FormControl>
                    <Flex>
                        <Select placeholder='Filter By Gender' mr={10}>
                            <option>Male</option>
                            <option>Female</option>
                        </Select>

                        <Select placeholder='Filter By Category' mr={10}>
                            <option>Makeup</option>
                            <option>Skincare</option>
                            <option>Haircare</option>
                        </Select>

                        <Select placeholder='Sort by Price'>
                            <option>Ascending</option>
                            <option>Descending</option>
                        </Select>
                    </Flex>
                </FormControl>
            </section>
            <div className='addProductbtn' style={{ marginLeft: '80%' }} >
                <Container maxW="lg">
                    <Stack direction='row' spacing={4} mt={20}>
                        <Button colorScheme='teal' variant='solid' w={'200px'}>
                            ADD PRODUCT
                        </Button>
                    </Stack>
                </Container>
            </div>
        </div>
    )
}

export default Dashboard
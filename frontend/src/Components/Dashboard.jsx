// import { Input, Flex, Box, Select, Button, border } from '@chakra-ui/react';
import {
    Input, Flex, Image, Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Select
} from '@chakra-ui/react';
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
const Dashboard = () => {
    return (
        <div >
            <div className='top' style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <Input type='email' placeholder='Search' borderColor={'gray'} w={'600px'} borderRadius={'0px'} bg={'white'} p={'10px'} />
                </div>
                <div>
                    <img src="../img/uifaces-popular-image.jpg" style={{ width: '30px', height: '30px' }} alt="" />
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
            <div className='addProductbtn' style={{ marginTop: '40px', textAlign: 'left' }} >
                <Stack direction='row' spacing={4} >
                    <Button colorScheme='#32324714' variant='solid'  w={'200px'}>
                        Add product
                    </Button>
                </Stack>
            </div>
        </div>
    )
}

export default Dashboard
// import { Input, Flex, Box, Select, Button, border } from '@chakra-ui/react';
import {
    Input, Flex, Image, Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Select
} from '@chakra-ui/react';
import { Container, Stack, Button } from '@chakra-ui/react';
import { useEffect, useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../Redux/ProductReducer/action';
import { useSearchParams } from 'react-router-dom';
import Pagination from './pagination';
const Dashboard = () => {
    const [searchParams] = useSearchParams();
    const [search, setSearch] = useState('')
    const [sortOrder, setSort] = useState('asc')
    const [gender, setGender] = useState('')
    const [category, setCategory] = useState('')
    const [currentPage, setCurrentPage] = useState(1)


    const dispatch = useDispatch()
    const userInfo = useSelector((state) => state.authReducer)
    // console.log(userInfo)
    const state = useSelector((state) => state.productReducer)
    const { products, page, pageCount } = state
    console.log(products);
    useEffect(() => {
        try {
            const queryParams = {
                page: currentPage,
                limit: 1
            };

            gender && (queryParams.gender = gender)
            category && (queryParams.category = category)
            search && (queryParams.search = search)
            sortOrder && (queryParams.sortOrder = sortOrder)

            const query = new URLSearchParams(queryParams).toString();

            dispatch(getProducts(query))
        } catch (error) {
            console.log(error)
        }

    }, [gender, category, search, sortOrder, currentPage])



    return (
        <div >
            <div className='top' style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <Input type='email' placeholder='Search' borderColor={'gray'} w={'600px'} borderRadius={'0px'} bg={'white'} p={'10px'} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className='img-div'>
                    <img src="../img/imgw.jpg" style={{ width: '35px', height: '35px' }} alt="not found!" />
                </div>


            </div>
            <section className='bottom' style={{ marginTop: '40px' }}>
                <FormControl>
                    <Flex>
                        <Select placeholder='Filter By Gender' mr={10} onChange={(e) => setGender(e.target.value)}>
                            <option value={'male'}>Male</option>
                            <option value={'female'}>Female</option>
                        </Select>

                        <Select placeholder='Filter By Category' mr={10} onChange={(e) => setCategory(e.target.value)}>
                            <option value={'makeup'}>Makeup</option>
                            <option value={'skincare'}>Skincare</option>
                            <option value={'haircare'}>Haircare</option>
                        </Select>

                        <Select placeholder='Sort by Price' onChange={(e) => setSort(e.target.value)}>
                            <option value={'asc'}>Ascending</option>
                            <option value={'desc'}>Descending</option>
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
                {/* {console.log(page, totalPages, 98)} */}

                <Pagination page={page} pageCount={pageCount} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    )
}

export default Dashboard
import { Box, Heading, Link, List, ListItem, Image } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // If you're using React Router, import Link from react-router-dom

const Sidebar = () => {
    const userInfo = useSelector((state) => state.authReducer)
    console.log(userInfo)
    return (<>
        <Box
            as="nav"
            h="100%"
            pos="fixed"
            top={0}
            left={0}
            bg="white.800"
            w="200px"
            color="gray.700"
            p={4}
            boxShadow="lg"
        >

            <Heading as="h1" fontSize="xl" mb={4} fontWeight="bold" color={"#013CC6"}>
                Nyka Dashboard
            </Heading>

            <List spacing={6}>

                <ListItem>
                    <Link as={RouterLink} to="/dashboard">
                        <img src="../img/element-3.jpg" alt="" />
                        Dashboard
                    </Link>
                </ListItem>
                <ListItem>
                    <Link as={RouterLink} to="/analytics">
                        Analytics
                    </Link>
                </ListItem>
                <ListItem>

                    {userInfo.isAuthenticated ? <Link as={RouterLink} to="/logout">Logout</Link> :

                        <Link as={RouterLink} to="/login">
                            Login
                        </Link>
                    }
                </ListItem>


            </List>
        </Box >
    </>
    );
};

export default Sidebar;

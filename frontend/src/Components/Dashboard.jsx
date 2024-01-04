// import { Input, Flex, Box, Select, Button, border } from '@chakra-ui/react';
import { Input, Flex, Image,Box } from '@chakra-ui/react';

const Dashboard = () => {
    return (
        <div >
            <section className='top' style={{ marginTop: '20px' }}>
                <Flex align="center" p={4} bg="gray.200" marginLeft="200px"> {/* Adjust margin left to avoid collision with sidebar */}
                    {/* Input tag */}
                    <Input type="text" placeholder="Search" />

                    {/* Space between input and image */}
                    <Box mx={4} />

                    {/* Img tag with small size */}
                    <Image src="path/to/your/image.jpg" alt="User" boxSize="30px" borderRadius="full" />
                </Flex>
            </section>

            <section className='bottom'></section>

        </div>
    )
}

export default Dashboard
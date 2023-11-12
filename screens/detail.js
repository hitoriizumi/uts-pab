import { Heading, Center, Text, Image, ScrollView, Box, Button } from "native-base";
import { Header } from "../components";
import Ionicons from "@expo/vector-icons/Ionicons";

const NewsDetail = ({ route }) => {
  // Get the params
  const params = route.params.item;
  return (
    <>
      <Header title={"Izumi"} withBack="true" />

      <ScrollView>
        <Box>
          <Image source={{uri: params.image}} alt="photo" w={"full"} h={'250'} mx={"auto"} px={"16"}/>
          <Heading px={"10"} pt={"6"} pb={"1"} >{params.title}</Heading>
          <Text mx={"auto"} px={"10"} pt={"1"} pb={"1"} textAlign={"justify"}>{params.content}</Text>
          <Heading px={"10"} pt={"4"} pb={"1"} >{params.judul}</Heading>
          <Text mx={"auto"} px={"10"} pt={"1"} pb={"3"} textAlign={"justify"}>{params.posisi}</Text>
        </Box>

        <Box pt={"3"} pb={"8"}>
          <Button 
            w={"30%"} mx={"auto"} bg={"#FF003D"} borderRadius={"10"} p={"2"}>
            Daftar Sekarang
          </Button>
        </Box>
      </ScrollView>
     
    </>
  );
};

export default NewsDetail;
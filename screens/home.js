import { Heading, Image, Text, FlatList, Form, Item, Input, Stack, Button } from "native-base";
import { Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import datas from "../datas";
import Ionicons from "@expo/vector-icons/Ionicons";

const Home = () => {
  const navigation = useNavigation();

  const renderitem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("News Detail", { item: item })}
      >
      </TouchableOpacity>


    );
  };

  return (
    <>
      <Header title={"Izumi"} />
      <ScrollView>
        <Box w="90%" mx={"auto"} pb={"8"} pt={"3"}>
          <Input mx="auto" placeholder="mau cari apa?" borderRadius={"20"} w="100%" />
        </Box>
        <Image source={require("../assets/foto.jpg")} alt="photo" w={"250"} h={'250'} mx={"auto"} px={"16"} py={"4"} borderRadius={"20"}/>
        <Heading px={"16"} pt={"3"} pb={"1"}>Mahasiswaku</Heading>
        <Text mx={"auto"} px={"16"} pt={"1"} pb={"3"} textAlign={"justify"}>Kamu adalah seorang mahasiswa penuh semangat, berbakat, dan penuh potensi. Dan inilah waktunya untuk meraih impianmu! 
        MahasiswaKu adalah kunci untuk membuka pintu-pintu kesempatan yang tak terbatas bagi para mahasiswa seperti kamu. Dengan kami, kamu akan meraih peluang magang dan pekerjaan yang sesuai 
        dengan minat, bakat, dan passionmu.</Text>

          <Box pt={"4"} px={"4"}  >
          <Heading mx={"auto"} pb={"2"}>Perusahaan</Heading>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {datas.slice(0).map((item, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    key={index}
                    onPress={() =>
                      navigation.navigate("Detail", { item: item })
                    }
                  >
                    <Box w={"48"} mr={"4"} ml={index == 0 ? "4" : "0"}>
                      <Image
                        source={{ uri: item.image }}
                        w="full"
                        h="24"
                        alt="Image Data"
                        mb={"2"}
                        borderRadius={"20"}
                      />
                      <Heading
                        fontSize={"sm"}
                        lineHeight={"xs"}
                        ellipsizeMode="tail"
                        numberOfLines={2}
                        color="black"
                      >
                        {item.title}
                      </Heading>
                    </Box>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </Box>
          <Box pt={"2"} pb={"8"}>
            <Button
            onPress={() =>
              navigation.navigate("For You")
            }
            w={"20%"} mx={"auto"} bg={"#FF003D"} borderRadius={"10"} p={"2"}>
              More
            </Button>
          </Box>
          
          <Box pb={"9"}>
            <Box px={"4"} bg={"#ffff"} w={"290"} h={'290'} mx={"auto"} py={"4"} borderRadius={"10"} boxShadow={"10"} shadow={"6"}>
              <Heading color={"black"} pt={"1"} pb={"2"}> Visi</Heading>
              <Text color={"black"} pb={"2"} textAlign={"justify"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, orci nec feugiat commodo, ipsum orci consequat nulla, non sodales sem lorem et ante. 
                Etiam dignissim tempor elit, nec feugiat ante suscipit eget. Sed imperdiet diam at ultrices viverra.
              </Text>
              <Heading color={"black"} pb={"2"} pt={"1"}> Misi</Heading>
              <Text color={"black"} textAlign={"justify"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, orci nec feugiat commodo, ipsum orci consequat nulla, non sodales sem lorem et ante. 
                Etiam dignissim tempor elit, nec feugiat ante suscipit eget. Sed imperdiet diam at ultrices viverra.
              </Text>
            </Box>
          </Box>

          <Box px={"4"} bg={"#333333"} w={"full"} h={'390'} mx={"auto"} pt={"4"}>
            <Heading color={"white"} pt={"1"} pb={"2"}> Contact Us</Heading>
            <Text fontSize={"15"} color={"white"} pb={"2"} textAlign={"justify"}>
              <Ionicons name="call-outline" size={22} color="white" />
              &nbsp; 081283847
            </Text>
            <Text fontSize={"15"} color={"white"} pb={"2"} textAlign={"justify"}>
              <Ionicons name="mail-outline" size={22} color="white" />
              &nbsp; mahasiswaku@gmail.com
            </Text>
            <Text fontSize={"15"} color={"white"} pb={"2"} textAlign={"justify"}>
              <Ionicons name="logo-instagram" size={22} color="white" />
              &nbsp; mahasiswaku_itts
            </Text>
            <Heading color={"white"} pt={"1"} pb={"2"}> About Us</Heading>
            <Text fontSize={"15"} color={"white"} pb={"2"} textAlign={"justify"}>
            MahasiswaKu lahir dari semangat untuk mempertemukan potensi dan kesempatan. Kami hadir sebagai jembatan antara mahasiswa yang penuh semangat dengan dunia karier yang menunggu untuk 
            dieksplorasi. Dengan kecanggihan teknologi dan jaringan luas, MahasiswaKu berkomitmen untuk memberikan akses mudah dan peluang yang sesuai bagi para mahasiswa, baik dalam menjalani 
            magang maupun memulai langkah pertama menuju karier yang cerah. Kami percaya bahwa setiap langkah kecil merupakan landasan yang kokoh untuk meraih mimpi besar. Mari bersama-sama 
            membangun masa depan yang gemilang untuk generasi penerus!
            </Text>
          </Box>
      </ScrollView>
      <FlatList
        data={datas}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Home;
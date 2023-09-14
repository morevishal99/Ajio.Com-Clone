import React, { useState } from 'react'
import { Show, Hide } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text, Input, Stack, Checkbox, } from '@chakra-ui/react'
import { getfilterValue } from '../../redux/Products/action';
import { useDispatch, useSelector } from 'react-redux';
import { setBrand, setCategoryValue, setCurrentPage, setPrice } from '../../redux/Filter/Filter';

const Mobilesidebar = ({ brandFilter, onPriceFilterChange, categoryfilter }) => {
     const dispatch = useDispatch();
     const store = useSelector((state) => state.FilterSlice);
     console.log("store: ", store);
     //   console.log("stor: ", store);
     const [Brand, setBrandValue] = useState("");
     const [Category, setCategory] = useState("");
     const [Rating, setRating] = useState("");
     const [Price, setPriceValue] = useState("");

     const handleCategory = (value) => {
       if (Category === value) {
         setCategory("");
         dispatch(setCategoryValue(""));
       } else if (value === "View all") {
         setCategory("View all");
         dispatch(setCategoryValue(""));
       } else {
         setCategory(value);
         dispatch(setCategoryValue(value));
         dispatch(setCurrentPage(1));
       }
     };
     const handleBrand = (value) => {
       if (Brand === value) {
         setBrandValue("");
         dispatch(setBrand(""));
       } else if (value === "View all") {
         setBrandValue("View all");
         dispatch(setBrand(""));
       } else {
         setBrandValue(value);
         dispatch(setBrand(value));
         dispatch(setCurrentPage(1));
       }
     };
     const handleRating = (value) => {
       if (Rating === value) {
         setRating("");
         dispatch(setRating(""));
       } else if (value === "View all") {
         setRating("View all");
         dispatch(setRating(""));
       } else {
         setRating(value);
         dispatch(setRating(value));
         dispatch(setCurrentPage(1));
       }
     };
     const handlePrice = (value) => {
       if (Price === value) {
         setPriceValue("");
         dispatch(setPrice(""));
       } else if (value === "View all") {
         setPriceValue("View all");
         dispatch(setPrice(""));
       } else {
         setPriceValue(value);
         dispatch(setPrice(value));
         dispatch(setCurrentPage(1));
       }
     };
    const category = localStorage.getItem("category");
    const [priceFilter, setPriceFilter] = React.useState([]);

    const handlePriceFilterChange = (event) => {
        const value = parseInt(event.target.value);
        let newPriceFilter = [...priceFilter];
        if (event.target.checked) {
            newPriceFilter.push(value);
        } else {
            newPriceFilter = newPriceFilter.filter((price) => price !== value);
        }
        setPriceFilter(newPriceFilter);
        onPriceFilterChange(newPriceFilter);
    };
    // const dispatch = useDispatch()
    React.useEffect(() => {

    }, [category]);
    return (
      <>
        {category === "men" ? (
          <Accordion
            display={"flex"}
            fontSize="10px"
            fontWeight={400}
            lineHeight="24px"
            color=" rgb(102, 102, 102)"
            padding={"10px"}
            justifyContent="center"
            allowMultiple
          >
            {/* category */}
            <AccordionItem marginTop="20px">
              <h2>
                <AccordionButton
                  fontSize="15px"
                  fontWeight={600}
                  lineHeight="24px"
                  color=" rgb(26, 32, 44)"
                >
                  <Box as="span" flex="1" textAlign="left">
                    Brand
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack spacing={5} direction="column">
                  <Checkbox
                    value={"viewall"}
                    onChange={brandFilter}
                    borderRadius={"15px"}
                    mt="5px"
                    padding="10px"
                    fontSize={"17px"}
                    border={"1px solid rgb(240,240,240)"}
                    colorScheme="green"
                  >
                    VIEW ALL
                  </Checkbox>
                  <Checkbox
                    value={"DENNISLINGO PREMIUM ATTIRE"}
                    onChange={brandFilter}
                    borderRadius={"15px"}
                    mt="5px"
                    padding="10px"
                    fontSize={"17px"}
                    border={"1px solid rgb(240,240,240)"}
                    colorScheme="green"
                  >
                    DENNISLINGO
                  </Checkbox>
                  <Checkbox
                    value={"Puma"}
                    onChange={brandFilter}
                    borderRadius={"15px"}
                    mt="5px"
                    padding="10px"
                    fontSize={"17px"}
                    border={"1px solid rgb(240,240,240)"}
                    colorScheme="green"
                  >
                    Puma
                  </Checkbox>
                  <Checkbox
                    value={"PERFORMAX"}
                    onChange={brandFilter}
                    borderRadius={"15px"}
                    mt="5px"
                    padding="10px"
                    fontSize={"17px"}
                    border={"1px solid rgb(240,240,240)"}
                    colorScheme="green"
                  >
                    PERFORMAX
                  </Checkbox>
                  <Checkbox
                    value={"NIKE"}
                    onChange={brandFilter}
                    borderRadius={"15px"}
                    mt="5px"
                    padding="10px"
                    fontSize={"17px"}
                    border={"1px solid rgb(240,240,240)"}
                    colorScheme="green"
                  >
                    NIKE
                  </Checkbox>
                  <Checkbox
                    value={"Mabish By Sonal Jain"}
                    onChange={brandFilter}
                    borderRadius={"15px"}
                    mt="5px"
                    padding="10px"
                    fontSize={"17px"}
                    border={"1px solid rgb(240,240,240)"}
                    colorScheme="green"
                  >
                    Mabish By Sonal Jain
                  </Checkbox>

                  <Checkbox
                    value={"womens-shoes"}
                    onChange={brandFilter}
                    borderRadius={"15px"}
                    mt="5px"
                    padding="10px"
                    fontSize={"17px"}
                    border={"1px solid rgb(240,240,240)"}
                    colorScheme="green"
                  >
                    Kun Faya KUN
                  </Checkbox>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ) : (
          <Accordion
            fontSize="10px"
            fontWeight={400}
            lineHeight="24px"
            color=" rgb(102, 102, 102)"
            border="1px solid rgb(240,240,240)"
            padding={"20px"}
            allowMultiple
            display={"flex"}
            
            // justifyContent="center"
           
          >
            

            {/* category */}
            <AccordionItem marginTop="20px">
              <h2>
                <AccordionButton
                  fontSize="18px"
                  fontWeight={600}
                  lineHeight="24px"
                  color=" rgb(26, 32, 44)"
                >
                  <Box as="span" flex="1" textAlign="left">
                    Category
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack spacing={5} direction="column">
                  {["View all", "Saree", "Jeans", "Top", "Dress"].map(
                    (category, index) => (
                      <Checkbox
                        borderRadius={"15px"}
                        mt="5px"
                        // padding="10px"
                        fontSize={"17px"}
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                        key={index}
                        id={`category${index}`}
                        isChecked={category === Category}
                        onChange={() => handleCategory(category)}
                      >
                        {category}
                      </Checkbox>
                    )
                  )}
                </Stack>
              </AccordionPanel>
            </AccordionItem>
            {/* brand */}
            <AccordionItem marginTop="20px">
              <h2>
                <AccordionButton
                  fontSize="18px"
                  fontWeight={600}
                  lineHeight="24px"
                  color=" rgb(26, 32, 44)"
                >
                  <Box as="span" flex="1" textAlign="left">
                    Brand
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack spacing={5} direction="column">
                  {[
                    "View all",
                    "DJ & C",
                    "FIG",
                    "DNMX",
                    "KORAM'S DESIGN",
                    "Teamspirit",
                    "Wedani",
                  ].map((category, index) => (
                    <Checkbox
                      borderRadius={"15px"}
                     
                      fontSize={"17px"}
                      border={"1px solid rgb(240,240,240)"}
                      colorScheme="green"
                      key={index}
                      id={`category${index}`}
                      isChecked={category === Brand}
                      onChange={() => handleBrand(category)}
                    >
                      {category}
                    </Checkbox>
                  ))}
                </Stack>
              </AccordionPanel>
            </AccordionItem>
            {/* Price */}
            <AccordionItem marginTop="20px">
              <h2>
                <AccordionButton
                  fontSize="18px"
                  fontWeight={600}
                  lineHeight="24px"
                  color=" rgb(26, 32, 44)"
                >
                  <Box as="span" flex="1" textAlign="left">
                    Price
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack spacing={5} direction="column">
                  {[299, 499, 799, 999].map((category, index) => (
                    <Checkbox
                      borderRadius={"15px"}
                     
                      fontSize={"17px"}
                      border={"1px solid rgb(240,240,240)"}
                      colorScheme="green"
                      key={index}
                      id={`category${index}`}
                      isChecked={category === Price}
                      onChange={() => handlePrice(category)}
                    >
                      under {category}
                    </Checkbox>
                  ))}
                </Stack>
              </AccordionPanel>
            </AccordionItem>

            

           
          </Accordion>
        )}
      </>
    );
}

export default Mobilesidebar

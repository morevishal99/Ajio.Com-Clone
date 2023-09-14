import React, { useState } from "react";
import { Show, Hide, filter } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Input,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBrand,
  setCategoryValue,
  setCurrentPage,
  setPrice,
  setRating,
} from "../../redux/Filter/Filter";
import { RxCross2 } from "react-icons/rx";

const WomenSideBar = () => {
  const dispatch = useDispatch();
  const {
    Brand,
    Category,

    Fabric,
    Price,
    Rating,
    SearchValue,
    currentPageRedux1,
  } = useSelector((state) => state.FilterSlice);
  //   console.log();
  //   console.log("stor: ", store);
  const [brand, setBrandValue] = useState("");
  const [categoryValue, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPriceValue] = useState("");

  const handleCategory = (value) => {
    if (categoryValue === value) {
      setCategory("");
      dispatch(setCategoryValue(""));
    } else if (value === "View all") {
      setCategory("View all");
      dispatch(setCategoryValue(""));
    } else {
      setCategory(value);
      dispatch(setCategoryValue(value));
      dispatch(setBrand(""));
      dispatch(setCurrentPage(1));
    }
  };
  const handleBrand = (value) => {
    if (brand === value) {
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
    if (rating === value) {
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
    if (price === value) {
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

  return (
    <>
      <Box>
        <Accordion
          fontSize="10px"
          fontWeight={400}
          lineHeight="24px"
          color=" rgb(102, 102, 102)"
          border="1px solid rgb(240,240,240)"
          padding={"20px"}
          allowMultiple
        >
          <AccordionItem marginTop="20px">
            <h2>
              <AccordionButton
                fontSize="18px"
                fontWeight={600}
                lineHeight="24px"
                color=" rgb(26, 32, 44)"
              >
                <Box as="span" flex="1" textAlign="left">
                  <Text
                    fontSize={"17px"}
                    // onClick={() => dispatch(setBrand("brand"))}
                  >
                    Filters
                  </Text>
                  <Box display={"grid"} gridTemplateColumns="repeat(3,1fr)">
                    {Brand ? (
                      <Text
                        onClick={() => {
                          setBrandValue("");
                          dispatch(setBrand(""));
                        }}
                        fontSize={"10px"}
                        display="flex"
                        textOverflow={"ellipsis"}
                      >
                        {Brand}
                        <span>
                          <RxCross2 />
                        </span>
                      </Text>
                    ) : null}
                    {Category ? (
                      <Text
                        onClick={() => {
                          setCategory("");
                          dispatch(setCategoryValue(""));
                        }}
                        fontSize={"10px"}
                        display="flex"
                      >
                        {Category}
                        <span>
                          <RxCross2 />
                        </span>
                      </Text>
                    ) : null}
                    {SearchValue ? (
                      <Text fontSize={"10px"} display="flex">
                        {SearchValue}{" "}
                        <span>
                          <RxCross2 />
                        </span>
                      </Text>
                    ) : null}
                    {Price ? (
                      <Text
                        onClick={() => {
                          setPriceValue("");
                          dispatch(setPrice(""));
                        }}
                        fontSize={"10px"}
                        display="flex"
                      >
                        {Price}{" "}
                        <span>
                          {" "}
                          <RxCross2 />
                        </span>
                      </Text>
                    ) : null}
                  </Box>
                </Box>
              </AccordionButton>
            </h2>
          </AccordionItem>

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
                      padding="10px"
                      fontSize={"17px"}
                      border={"1px solid rgb(240,240,240)"}
                      colorScheme="green"
                      key={index}
                      id={`category${index}`}
                      isChecked={category === categoryValue}
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
                {Category === "Saree" ? (
                  <div>
                    {[
                      "KORAM'S DESIGN",

                      "BESUCHER",

                      "Anjaneya Sarees",
                      "Silverfly",

                      "SATRANI",
                      "Marziyaa",
                      "ZIKARAA",

                      "PRATHAM BLUE",
                      "Suta",

                      "Styleelite",

                      "Saree mall",

                      "TIKHI IMLI",

                      "FashDeal",
                    ].map((category, index) => (
                      <Checkbox
                        borderRadius="15px"
                        mt="5px"
                        padding="10px"
                        fontSize="13px"
                        border="1px solid rgb(240,240,240)"
                        colorScheme="green"
                        key={index}
                        id={`category${index}`}
                        isChecked={category === brand}
                        onChange={() => handleBrand(category)}
                      >
                        {category}
                      </Checkbox>
                    ))}
                  </div>
                ) : null}
                {Category === "Jeans" ? (
                  <div>
                    {[
                      "SHOWOFF",
                      "Buda Jeans Co",
                      "FREEHAND",
                      "KOTTY",

                      "DNMX",
                      "ORCHID BLUES",
                      "Lee Cooper",
                      "GAP",
                      "MISS CHASE",
                      "REA-LIZE",

                      "FUELLE",
                      "LEVIS",

                      "U.S. Polo Assn.",
                      "Pepe Jeans",

                      "JDY BY ONLY",
                    ].map((category, index) => (
                      <Checkbox
                        borderRadius="15px"
                        mt="5px"
                        padding="10px"
                        fontSize="13px"
                        border="1px solid rgb(240,240,240)"
                        colorScheme="green"
                        key={index}
                        id={`category${index}`}
                        isChecked={category === brand}
                        onChange={() => handleBrand(category)}
                      >
                        {category}
                      </Checkbox>
                    ))}
                  </div>
                ) : null}
                {Category === "Top" ? (
                  <div>
                    {[
                      "Clafoutis",

                      "FIG",
                      "Wedani",
                      "DJ & C",

                      "DNMX",
                      "Teamspirit",

                      "Draax Fashions",
                      "EYEBOGLER",
                      "FUELLE",
                      "TRENDS TOWER",
                      "DREAM BEAUTY FASHION",
                    ].map((category, index) => (
                      <Checkbox
                        borderRadius="15px"
                        mt="5px"
                        padding="10px"
                        fontSize="13px"
                        border="1px solid rgb(240,240,240)"
                        colorScheme="green"
                        key={index}
                        id={`category${index}`}
                        isChecked={category === brand}
                        onChange={() => handleBrand(category)}
                      >
                        {category}
                      </Checkbox>
                    ))}
                  </div>
                ) : null}
                {Category === "Dress" ? (
                  <div>
                    {[
                      "Janasya",
                      "MASAKALI.CO",

                      "MARIE CLAIRE",
                      "Indibelle",
                      "AASK",
                      "COTTINFAB",
                      "YUFTA",
                      "Hetvi Creation",
                      "Tior",
                    ].map((category, index) => (
                      <Checkbox
                        borderRadius="15px"
                        mt="5px"
                        padding="10px"
                        fontSize="13px"
                        border="1px solid rgb(240,240,240)"
                        colorScheme="green"
                        key={index}
                        id={`category${index}`}
                        isChecked={category === brand}
                        onChange={() => handleBrand(category)}
                      >
                        {category}
                      </Checkbox>
                    ))}
                  </div>
                ) : null}
                {Category === "" ? (
                  <div>
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
                        mt="5px"
                        padding="10px"
                        fontSize={"17px"}
                        border={"1px solid rgb(240,240,240)"}
                        colorScheme="green"
                        key={index}
                        id={`category${index}`}
                        isChecked={category === brand}
                        onChange={() => handleBrand(category)}
                      >
                        {category}
                      </Checkbox>
                    ))}
                  </div>
                ) : null}
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
                    mt="5px"
                    padding="10px"
                    fontSize={"17px"}
                    border={"1px solid rgb(240,240,240)"}
                    colorScheme="green"
                    key={index}
                    id={`category${index}`}
                    isChecked={category === price}
                    onChange={() => handlePrice(category)}
                  >
                    under {category}
                  </Checkbox>
                ))}
              </Stack>
            </AccordionPanel>
          </AccordionItem>

          {/* Rating */}
          <AccordionItem marginTop="20px">
            <h2>
              <AccordionButton
                fontSize="18px"
                fontWeight={600}
                lineHeight="24px"
                color=" rgb(26, 32, 44)"
              >
                <Box as="span" flex="1" textAlign="left">
                  Rating
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack spacing={5} direction="column">
                {["View all", "4.5", "3.5", "2.5", "1.0"].map(
                  (category, index) => (
                    <Checkbox
                      borderRadius={"15px"}
                      mt="5px"
                      padding="10px"
                      fontSize={"17px"}
                      border={"1px solid rgb(240,240,240)"}
                      colorScheme="green"
                      key={index}
                      id={`category${index}`}
                      isChecked={category === rating}
                      onChange={() => handleRating(category)}
                    >
                      {category}
                    </Checkbox>
                  )
                )}
              </Stack>
            </AccordionPanel>
          </AccordionItem>

          {/* colors */}
          <AccordionItem marginTop="20px">
            <h2>
              <AccordionButton
                fontSize="18px"
                fontWeight={600}
                lineHeight="24px"
                color=" rgb(26, 32, 44)"
              >
                <Box as="span" flex="1" textAlign="left">
                  Colors
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel padding={"5px"}>
              <Input />

              <Stack
                padding={"5px"}
                fontSize={"17px"}
                justifyContent={"space-around"}
                direction="row"
              >
                <Text
                  borderRadius={"15px"}
                  padding="10px"
                  border={"1px solid rgb(240,240,240)"}
                  colorScheme="green"
                >
                  Beinge
                </Text>
                <Text
                  borderRadius={"15px"}
                  padding="10px"
                  border={"1px solid rgb(240,240,240)"}
                  colorScheme="green"
                >
                  Black
                </Text>

                <Text
                  borderRadius={"15px"}
                  padding="10px"
                  border={"1px solid rgb(240,240,240)"}
                  colorScheme="green"
                >
                  Blue
                </Text>
              </Stack>
              <Text
                borderRadius={"15px"}
                mt="5px"
                padding="10px"
                fontSize={"17px"}
                border={"1px solid rgb(240,240,240)"}
              >
                Combo Of Different Color
              </Text>
              <Text
                borderRadius={"15px"}
                mt="5px"
                padding="10px"
                fontSize={"17px"}
                border={"1px solid rgb(240,240,240)"}
              >
                Combo Of Maroon Shade
              </Text>
              <Stack
                borderRadius={"15px"}
                padding={"5px"}
                fontSize={"17px"}
                justifyContent={"space-around"}
                direction="row"
              >
                <Text
                  borderRadius={"15px"}
                  padding="10px"
                  border={"1px solid rgb(240,240,240)"}
                  colorScheme="green"
                >
                  Grey
                </Text>
                <Text
                  borderRadius={"15px"}
                  padding="10px"
                  border={"1px solid rgb(240,240,240)"}
                  colorScheme="green"
                >
                  Pink
                </Text>

                <Text
                  borderRadius={"15px"}
                  padding="10px"
                  border={"1px solid rgb(240,240,240)"}
                  colorScheme="green"
                >
                  Maroon
                </Text>
              </Stack>
              <Stack
                padding={"5px"}
                fontSize={"17px"}
                justifyContent={"space-around"}
                direction="row"
              >
                <Text
                  borderRadius={"15px"}
                  padding="10px"
                  border={"1px solid rgb(240,240,240)"}
                  colorScheme="green"
                >
                  White
                </Text>
              </Stack>
              <Text
                borderRadius={"15px"}
                padding="10px"
                fontSize={"17px"}
                border={"1px solid rgb(240,240,240)"}
              >
                Combo Of Red Shade
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Size */}
          <AccordionItem marginTop="20px">
            <h2>
              <AccordionButton
                fontSize="18px"
                fontWeight={600}
                lineHeight="24px"
                color=" rgb(26, 32, 44)"
              >
                <Box as="span" flex="1" textAlign="left">
                  Size
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack spacing={5} direction="column">
                <Checkbox colorScheme="green">Free</Checkbox>
                <Checkbox colorScheme="green">Height</Checkbox>
                <Checkbox colorScheme="green">Lenght</Checkbox>
              </Stack>
            </AccordionPanel>
          </AccordionItem>

          {/* Combo */}
          <AccordionItem marginTop="20px">
            <h2>
              <AccordionButton
                fontSize="18px"
                fontWeight={600}
                lineHeight="24px"
                color=" rgb(26, 32, 44)"
              >
                <Box as="span" flex="1" textAlign="left">
                  Combo
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack spacing={5} direction="column">
                <Checkbox colorScheme="green">Combo</Checkbox>
                <Checkbox colorScheme="green">Pack of 2</Checkbox>
                <Checkbox colorScheme="green">Pack of 3</Checkbox>
                <Checkbox colorScheme="green">Pack of 4</Checkbox>
                <Checkbox colorScheme="green">Pack of 5</Checkbox>
                <Checkbox colorScheme="green">Pack of 6</Checkbox>
                <Checkbox colorScheme="green">Single</Checkbox>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

export default WomenSideBar;

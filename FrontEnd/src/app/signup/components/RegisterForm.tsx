"use client";
import { Formik, Form, Field } from "formik";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import ButtonSubmit from "@/app/components/ButtonSubmit";
import ButtonLink from "@/app/components/ButtonLink";

const RegisterForm = () => {
  const [desc, setDesc] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setDesc(event.target.value);
  };
  return (
    <Box width={"100%"}>
      <Formik
        initialValues={{ email: "", username: "" }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        <Form style={{ padding: "0 8px", lineHeight: "80px" }}>
          <Box maxWidth={"100%"}>
            <FormControl sx={{ width: "430px" }} variant="outlined">
              <OutlinedInput
                label="Full Name"
                id="outlined-adornment-fullName"
              />
              <InputLabel htmlFor="outlined-adornment-fullName">
                Full Name
              </InputLabel>
            </FormControl>

            <FormControl sx={{ width: "430px" }} variant="outlined">
              <OutlinedInput
                label="Email Address"
                id="outlined-adornment-email"
              />
              <InputLabel htmlFor="outlined-adornment-email">
                Email Address
              </InputLabel>
            </FormControl>

            <FormControl sx={{ width: "430px" }} variant="outlined">
              <OutlinedInput
                label="Password"
                id="outlined-adornment-password"
              />
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
            </FormControl>

            <FormControl sx={{ width: "430px" }} variant="outlined">
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={desc}
                label="What best describes you"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <InputLabel htmlFor="demo-simple-select-helper">
                What best describes you
              </InputLabel>
            </FormControl>
            <FormControl sx={{ width: "430px" }} variant="outlined">
              <ButtonSubmit isSpuare={true}>Sign up</ButtonSubmit>
            </FormControl>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default RegisterForm;

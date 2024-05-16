import { Formik, Field } from "formik";
import { CurrentUserContext } from "../contexts/User";
import { useContext } from "react";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";

export default function LoginForm() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  return (
    <div className="flex justify-center items-center p-10 font-sans">
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={(values, {resetForm}) => {
            setCurrentUser({
              username: values.username,
              avatar_url:
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            })
            resetForm();
          }}
        resetForm >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit} resetForm>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Field
                    as={Input}
                    id="username"
                    name="username"
                    type="username"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length < 6) {
                        error = "Password must contain at least 6 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="green" width="full">
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
}

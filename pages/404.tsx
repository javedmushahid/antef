import { NextPage } from "next";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { FlexBox, FlexRowCenter } from "@/components/flex-box";

const Error404: NextPage = () => {
  const router = useRouter();
  const handleGoBack = () => router.back();
  const handleGoHome = () => router.push("/");

  return (
    <FlexRowCenter px={2} minHeight="100vh" flexDirection="column">
      <FlexBox flexWrap="wrap">
        <Button
          variant="outlined"
          color="primary"
          sx={{ m: 1 }}
          onClick={handleGoBack}
        >
          Go Back
        </Button>

        <Button
          variant="contained"
          onClick={handleGoHome}
          color="primary"
          sx={{ m: 1 }}
        >
          Go to Home
        </Button>
      </FlexBox>
    </FlexRowCenter>
  );
};

export default Error404;

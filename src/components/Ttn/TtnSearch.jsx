import { Box, Button, TextField } from "@mui/material";

 const TnnSearch = () => {


    return (
        <>
          <Box
            component="form"
            mt='20px'
          
          >
            <TextField
              fullWidth
              id="tnn"
              name="tnn"
              label="Введіть ТТН"
              sx={{
             mb: '20px',
             '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: "rgb(211, 47, 47)",
              },},
              '& label.Mui-focused': {
                color: 'rgb(211, 47, 47)',
              },
              }}
            />
            <Button
              fullWidth
              mb={1}
              variant="contained"
              color="error"

              type="submit"
            >
              Шукати
            </Button>
          </Box>
        </>
      );

 }

 export default TnnSearch
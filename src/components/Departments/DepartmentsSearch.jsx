import { Box, Button, TextField } from "@mui/material"

const DepartmentsSearch =()=>{
    return   <>
    <Box
      component="form"
      sx={{
        gap: 1,
      }}
      mt={2}
    >
      <TextField
        fullWidth
        id="query"
        name="query"
        label="Введіть назву населенного пункту"
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
      <TextField
        fullWidth
        id="warehouseId"
        name="warehouseId"
        label="Введіть номер відділення"
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
}

export default DepartmentsSearch

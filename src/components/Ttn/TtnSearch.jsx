import { Box, Button, TextField } from "@mui/material";

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { fetchTtn } from '../../redux/ttn/ttn-operations';
import { saveTtn } from '../../redux/ttn/ttn-slice';
import { getIsLoading, getQueryTtn } from '../../redux/ttn/ttn-selectors';


const validationSchema = yup.object({
  ttn: yup
    .string()
    .matches(/^[0-9]{14}$/, 'ТТН має мати довжину 14 цифр')
    .required('ТТН не введено'),
});


 const TtnSearch = () => {
  const dispatch = useDispatch();

  const queryTtn = useSelector(getQueryTtn);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    if (!queryTtn) {
      return;
    }
    formik.setFieldValue('ttn', queryTtn);
    formik.setValues({ ttn: queryTtn });
    formik.submitForm();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ queryTtn]);

  const formik = useFormik({
    initialValues: {
      ttn: queryTtn,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const body = {
        modelName: 'TrackingDocument',
        calledMethod: 'getStatusDocuments',
        methodProperties: {
          Documents: [
            {
              DocumentNumber: values.ttn,
              Phone: '380502003309',
            },
          ],
        },
      };

      dispatch(fetchTtn(body));
      dispatch(saveTtn(values.ttn));
    },
  });

    return (
        <>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            mt='20px'
          
          >
            <TextField
              fullWidth
              id="ttn"
              name="ttn"
              label="Введіть ТТН"
              value={formik.values.ttn}
              onChange={formik.handleChange}
              error={formik.touched.ttn && Boolean(formik.errors.ttn)}
              helperText={formik.touched.ttn && formik.errors.ttn}
          
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
              disabled={isLoading}
              type="submit"
            >
              Шукати
            </Button>
          </Box>
        </>
      );

 }

 export default TtnSearch
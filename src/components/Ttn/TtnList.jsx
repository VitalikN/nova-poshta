import { Box, Button, Card, CardContent, Divider, Grid, List, ListItem, Skeleton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import {
  getTtn,
  getError,
  getTtnList,
  getIsLoading,
} from '../../redux/ttn/ttn-selectors';
import {
  deleteAllSavedTtn,
  deleteQueryTtn,
  setQueryTtn,
} from '../../redux/ttn/ttn-slice';
import TtnCards from './TtnCards';

export const TtnList = () => {

    const ttnData = useSelector(getTtn);
    const ttnListData = useSelector(getTtnList);
  
    const error = useSelector(getError);
    const isLoading = useSelector(getIsLoading);
    const dispatch = useDispatch();
  
    const { data, errors } = ttnData;



    const onTtnListClickHandler = event => {
        dispatch(setQueryTtn(event.target.dataset.ttn));
      };
    
      const onTtnDeleteClickHandler = event => {
        dispatch(setQueryTtn(''));
        dispatch(deleteQueryTtn(event.target.dataset.ttn));
      };
      const onAllTtnDeleteClickHandler = () => {
        dispatch(deleteAllSavedTtn());
      };

    return(

        <>
        {error && `Something went wrong: ${error}`}
        {errors && errors[0]}
        <List>
        {!error &&
          data && ttnListData.length > 0 &&
          data.map(document => (
            <ListItem
              key={document.Number}
              sx={{
                width: '100%',
              }}
            >
              <Card sx={{ width: '100%' }}>
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                      }}
                    >
                      {isLoading ? (
                        <Skeleton />
                      ) : (
                        <Typography>
                          Статус доставки:
                          {document.Status?.length
                            ? document.Status
                            : 'дані відсутні...'}
                        </Typography>
                      )}
                      {isLoading ? (
                        <Skeleton />
                      ) : (
                        <Typography variant="body2" color="grey" mb={1}>
                          Дата доставки:
                          {document.TrackingUpdateDate?.length
                            ? document.TrackingUpdateDate
                            : 'дані відсутні...'}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  <Divider />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}> 
                    <Box
                      sx={{
                        width: '100%',
                      }}
                    >
                      {isLoading ? (
                        <Skeleton />
                      ) : (
                        <Typography mt={1}>
                          Відправлено:
                          {document.WarehouseSender?.length
                            ? document.WarehouseSender
                            : 'дані відсутні...'}
                        </Typography>
                      )}
                      {isLoading ? (
                        <Skeleton />
                      ) : (
                        <Typography  mb={1}>
                          Дата створення:
                          {document.DateCreated?.length
                            ? document.DateCreated
                            : 'дані відсутні...'}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  <Divider />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        width: '100%',
                      }}
                    >
                      {isLoading ? (
                        <Skeleton />
                      ) : (
                        <Typography mt={1}>
                          Отримано:
                          {document.WarehouseRecipient?.length
                            ? document.WarehouseRecipient
                            : 'дані відсутні...'}
                        </Typography>
                      )}
                      {isLoading ? (
                        <Skeleton />
                      ) : (
                        <Typography >
                          Дата прибуття:
                          {document.ActualDeliveryDate?.length
                            ? document.ActualDeliveryDate
                            : 'дані відсутні...'}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  <Divider />
                </CardContent>
              </Card>
            </ListItem>
          ))}
      </List>
      {ttnListData.length> 0 &&   <Typography ml={2}> Історія пошуку: </Typography>
}
  <List >
        <Grid container spacing={2}>
          {ttnListData &&
            ttnListData.map(ttn => (
              <TtnCards
                key={ttn}
                ttn={ttn}
                onTtnListClickHandler={onTtnListClickHandler}
                onTtnDeleteClickHandler={onTtnDeleteClickHandler}
              />
            ))}
        </Grid>
      </List>
      {ttnListData?.length !== 0 &&  (
        <Button onClick={onAllTtnDeleteClickHandler} fullWidth mb={8}>
          очистити історію
        </Button>
      )}
    </>
    )
}

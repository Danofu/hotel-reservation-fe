import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import { Trans, useTranslation } from 'react-i18next';

import Spacer from 'components/utils/Spacer';
import { Props } from 'components/Reservation/types';
import { TPATH } from 'components/Reservation/constants';

const Reservation = ({
  checkIn,
  checkOut,
  description,
  header,
  meals,
  onCancel,
  peopleAmount,
  price,
  sx,
  ...props
}: Props) => {
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const { t } = useTranslation();

  const isReservationInPast = checkOut.isBefore(moment());

  const handleTextExpand = () => setIsTextExpanded((prevIsTextExpanded) => !prevIsTextExpanded);

  return (
    <Card elevation={4} sx={{ p: 3, ...sx }} {...props}>
      <CardContent sx={{ textAlign: 'left' }}>
        <Stack direction="row" alignItems="center">
          <Typography variant="h6">{header}</Typography>
          <Spacer />
          <Typography variant="caption">
            <Trans
              i18nKey={`${TPATH}.info`}
              values={{
                checkIn: checkIn.format('DD.MM.yyyy'),
                checkOut: checkOut.format('DD.MM.yyyy'),
                peopleAmount: peopleAmount.toString(),
                price: price.toString(),
              }}
            >
              Price: zł{{ price }} • People: {{ peopleAmount }} • Dates: &nbsp;
              {{ checkIn: checkIn.format('DD.MM.yyyy') }} – &nbsp;
              {{ checkOut: checkOut.format('DD.MM.yyyy') }}
            </Trans>
          </Typography>
        </Stack>
        <Typography
          mt={2}
          onClick={handleTextExpand}
          sx={{
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            cursor: 'pointer',
            display: isTextExpanded ? 'block' : '-webkit-box',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          textAlign="justify"
          variant="body1"
        >
          {description}
        </Typography>
        {meals && (
          <Grid container mt={3}>
            <Grid item xs={1}>
              <Typography variant="body2">{t(`${TPATH}.meals`)}</Typography>
            </Grid>
            <Grid display="flex" flexWrap="wrap" gap={1} item xs={11}>
              {meals.map((meal) => (
                <Chip key={meal} label={meal} size="small" />
              ))}
            </Grid>
          </Grid>
        )}
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button color="error" disabled={isReservationInPast} onClick={onCancel} size="small" variant="contained">
          {t(`${TPATH}.cancel`)}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Reservation;

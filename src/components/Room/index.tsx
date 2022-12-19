import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import React, { FC, useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import { Props } from 'components/Room/types';
import { TPATH } from 'components/Room/constants';

const Room: FC<Props> = ({ description, header, peopleAmount, price }) => {
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const { t } = useTranslation();

  const handleTextExpand = () => setIsTextExpanded((prevState) => !prevState);

  return (
    <Card>
      <CardContent>
        <Typography sx={{ mb: 2 }} variant="h6">
          {header}
        </Typography>
        <Typography
          align="justify"
          onClick={handleTextExpand}
          sx={{
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            cursor: 'pointer',
            display: isTextExpanded ? 'block' : '-webkit-box',
            mb: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          variant="body1"
        >
          {description}
        </Typography>
        <Stack direction="row" justifyContent="space-around">
          <Typography color="text.secondary" variant="body2">
            {t(`${TPATH}.peopleAmount`, { amount: peopleAmount })}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {t(`${TPATH}.price`, { price })}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button>{t(`${TPATH}.book`)}</Button>
      </CardActions>
    </Card>
  );
};

export default Room;

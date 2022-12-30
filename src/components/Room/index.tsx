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

const Room: FC<Props> = ({
  BookButtonProps,
  CardActionsProps,
  CardContentProps,
  DescriptionProps,
  DescriptionSx,
  HeaderProps,
  InfoProps,
  RoomInfoWrapperProps,
  description,
  header,
  peopleAmount,
  price,
  ...props
}) => {
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const { t } = useTranslation();

  const handleTextExpand = () => setIsTextExpanded((prevState) => !prevState);

  return (
    <Card {...props}>
      <CardContent {...CardContentProps}>
        <Typography component="h3" sx={{ mb: 2 }} variant="h6" {...HeaderProps}>
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
            ...DescriptionSx,
          }}
          variant="body1"
          {...DescriptionProps}
        >
          {description}
        </Typography>
        <Stack direction="row" justifyContent="space-around" {...RoomInfoWrapperProps}>
          <Typography color="text.secondary" variant="body2" {...InfoProps}>
            {t(`${TPATH}.peopleAmount`, { amount: peopleAmount })}
          </Typography>
          <Typography color="text.secondary" variant="body2" {...InfoProps}>
            {t(`${TPATH}.price`, { price })}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions {...CardActionsProps}>
        <Button {...BookButtonProps}>{t(`${TPATH}.book`)}</Button>
      </CardActions>
    </Card>
  );
};

export default Room;

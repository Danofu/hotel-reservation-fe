import { ButtonProps } from '@mui/material/Button';
import { CardActionsProps } from '@mui/material/CardActions';
import { CardContentProps } from '@mui/material/CardContent';
import { CardProps } from '@mui/material/Card';
import { StackProps } from '@mui/material/Stack';
import { TypographyProps } from '@mui/material/Typography';

export type Props = CardProps & {
  BookButtonProps?: ButtonProps;
  CardActionsProps?: CardActionsProps;
  CardContentProps?: CardContentProps;
  DescriptionProps?: Omit<TypographyProps<'span'>, 'sx'>;
  DescriptionSx?: TypographyProps<'span'>['sx'];
  HeaderProps?: TypographyProps<'h3'>;
  InfoProps?: TypographyProps<'span'>;
  RoomInfoWrapperProps?: StackProps;
  description: string;
  header: string;
  peopleAmount: number;
  price: number;
};

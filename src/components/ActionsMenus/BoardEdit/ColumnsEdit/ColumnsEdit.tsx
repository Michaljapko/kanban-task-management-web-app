import { BOARD_COLUMNS, COLUMN_ADD, COLUMN_PLACEHOLDER } from 'data/textEN';
import {
  StyledBoxSection,
  StyledColumnInputBox,
  StyledLabel,
} from 'components/ActionsMenus/ActionsMenus.styled';
import { Button, ScrollWrapper, Input, CrossIcon } from 'components/UI';
import { BoardInputValues } from 'types';
import { FieldArray } from 'formik';
import { v4 as uuid } from 'uuid';

const ColumnsEdit = ({ values }: { values: BoardInputValues }) => {
  return (
    <StyledBoxSection>
      <StyledLabel htmlFor="columns">{BOARD_COLUMNS}</StyledLabel>
      <FieldArray
        name="columns"
        render={({ push, remove }) => (
          <>
            <ScrollWrapper>
              {values.columns.length > 0 &&
                values.columns.map((columns, index) => (
                  <StyledColumnInputBox key={index}>
                    <Input name={`columns.${index}.name`} placeholder={COLUMN_PLACEHOLDER} />
                    <CrossIcon onClick={() => remove(index)} />
                  </StyledColumnInputBox>
                ))}
            </ScrollWrapper>
            <Button
              type="button"
              variant="secondary"
              width="full"
              onClick={() => push({ id: uuid(), name: '' })}>
              {COLUMN_ADD}
            </Button>
          </>
        )}
      />
    </StyledBoxSection>
  );
};
export default ColumnsEdit;

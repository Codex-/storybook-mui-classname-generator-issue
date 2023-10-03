/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import MenuItem from "@mui/material/MenuItem";
import type { SelectChangeEvent } from "@mui/material/Select";
import { action } from "@storybook/addon-actions";
import type{ Meta, StoryFn } from "@storybook/react";
import React from "react";

import { Dropdown, type DropdownProps } from "./Dropdown";

const items = ["ten", "twenty", "thirty", "Another option"];

const DropdownStoryMeta: Meta<typeof Dropdown> = {
  title: "Dropdown",
  component: Dropdown,
};

export default DropdownStoryMeta;

const DropdownExample = (
  partialProps: Pick<DropdownProps, "disabled" | "error" | "native"> & {
    dataTestid?: string;
  }
) => {
  const [value, setValue] = React.useState(items[0]);

  const onChange = (event: SelectChangeEvent) => {
    action("on Change")(event);
    setValue(event.target.value);
  };

  const native = !!partialProps.native;

  return (
    <div
      css={css`
        display: block;
        width: 200px;
      `}
    >
      <Dropdown
        {...partialProps}
        value={value}
        onChange={onChange}
        native={native}
      >
        {items.map((item) =>
          native ? (
            <option value={item} key={item}>
              {item}
            </option>
          ) : (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          )
        )}
      </Dropdown>
    </div>
  );
};

const FlexRow = styled.div`
  display: flex;
  gap: 20px;
`;

export const Default: StoryFn<typeof Dropdown> = () => (
  <div
    css={css`
      display: flex;
      gap: 10px;
      flex-direction: column;
      background-color: #f9f9f9;
      padding: 20px;
    `}
  >
    <strong>Default</strong>
    <FlexRow>
      <DropdownExample />
      <DropdownExample dataTestid="one" />
      <DropdownExample disabled />
      <DropdownExample error />
    </FlexRow>
    <strong>Native</strong>
    <FlexRow>
      <DropdownExample native />
      <DropdownExample dataTestid="two" native />
      <DropdownExample native disabled />
      <DropdownExample native error />
    </FlexRow>
  </div>
);

Default.parameters = {
  pseudo: {
    useExplicitSelectors: true,
    hover: ["[data-testid=one]", "[data-testid=two]"],
  },
};

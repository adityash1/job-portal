import PropTypes from "prop-types";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";

const Autocomplete = (props) => {
  const {
    getRootProps,
    getInputLabelProps,
    getClearProps,
    getPopupIndicatorProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    multiple: true,
    options: props.options,
    getOptionLabel: (option) => option.title,
    getInputLabelProps: props.label,
    onChange: (_, newValue) => {
      props.onChange(newValue); // Call the passed onChange handler with new value
    },
    disableClearable: false,
  });

  return (
    <Root>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>{props.label}</Label>
        <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
          {value.map((option, index) => (
            <StyledTag
              key={option.title}
              label={option.title}
              {...getTagProps({ index })}
            />
          ))}
          <input {...getInputProps()} />
          {value.length > 0 && <StyledCloseIcon {...getClearProps()} />}
          <StyledExpandMoreIcon {...getPopupIndicatorProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li key={option.title} {...getOptionProps({ option, index })}>
              <span>{option.title}</span>
            </li>
          ))}
        </Listbox>
      ) : null}
    </Root>
  );
};

Autocomplete.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Autocomplete;

const Tag = (props) => {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const Root = styled("div")(
  ({ theme }) => `
    color: ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.65)"
        : "rgba(0,0,0,.85)"
    };
    font-size: 14px;
  `
);

const Label = styled("label")`
  font-size: 13px;
  font-weight: 500;
  display: block;
  text-align: left;
`;

const StyledTag = styled(Tag)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    height: 21px;
    line-height: 21px;
    margin: 2px;
    background-color: ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.08)"
        : "rgb(230, 230, 230)"
    };
    border-radius: 2px;
    box-sizing: content-box;
    outline: 0;
    overflow: hidden;

    &:focus {
      border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
      background-color: ${
        theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"
      };
    }

    & span {
      font-size: 12px;
      font-weight: 300;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 0px 3px 0px 6px
    }

    & svg {
      font-size: 12px;
      color: rgb(102, 102, 102);
      cursor: pointer;
      padding: 4px;
    }

    & svg:hover {
        background-color: rgb(255, 189, 173);
        color: rgb(222, 53, 11);
    }
  `
);

const StyledCloseIcon = styled(CloseIcon)(
  () => `
    font-size: 18px;
    color: rgb(204, 204, 204);
    padding: 4px 8px;

    &:hover {
        color: rgb(102, 102, 102);
    }

    &:focus {
        color: rgb(102, 102, 102);
    }
  `
);

const StyledExpandMoreIcon = styled(ExpandMoreIcon)(
  () => `
    font-size: 20px;
    color: rgb(204, 204, 204);
    padding: 0px 0px 0px 8px;
    margin: 3px 0px;
    border-left: 1px solid rgb(204, 204, 204);

    &:hover {
        color: rgb(102, 102, 102);
    }

    &:focus {
        color: rgb(102, 102, 102);
    }
  `
);

const Listbox = styled("ul")(
  ({ theme }) => `
    width: max-content;
    min-width: 170px;
    margin: 8px 0 0;
    padding: 0;
    position: absolute;
    list-style: none;
    text-align: left;
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    overflow: auto;
    max-height: 250px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 1;

    & li {
      padding: 8px 12px;
      display: flex;
      font-size: 14px;
      font-weight: 300;

      & span {
        flex-grow: 1;
      }

      & svg {
        color: transparent;
      }
    }

    & li.${autocompleteClasses.focused} {
      background-color: ${
        theme.palette.mode === "dark" ? "#003b57" : "#deebff"
      };

      & svg {
        color: currentColor;
      }
    }
  `
);

const InputWrapper = styled("div")(
  ({ theme }) => `
    width: fit-content;
    min-width: 150px;
    border: 1px solid ${theme.palette.mode === "dark" ? "#434343" : "#d9d9d9"};
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    border-radius: 4px;
    padding: 4px 8px;
    display: flex;
    flex-wrap: wrap;

    &:hover {
      border-color: ${
        theme.palette.mode === "dark" ? "#177ddc" : "rgb(179, 179, 179)"
      };
    }

    &.focused {
      border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#2684ff"};
      box-shadow: #2684ff 0px 0px 0px 1px;
    }

    & input {
      background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
      color: ${
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.65)"
          : "rgba(0,0,0,.85)"
      };
      height: 21px;
      box-sizing: border-box;
      padding: 2px 6px 0px 6px;
      width: 0;
      min-width: 30px;
      flex-grow: 1;
      border: 0;
      margin: 0;
      outline: 0;
    }
  `
);

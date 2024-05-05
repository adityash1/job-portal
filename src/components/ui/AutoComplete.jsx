import PropTypes from "prop-types";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";

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

const Autocomplete = () => {
  const {
    getRootProps,
    // getInputLabelProps,
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
    options: engineeringRoles,
    getOptionLabel: (option) => option.title,
    disableClearable: false,
  });

  // Filter out selected options from the listbox
  const availableOptions = groupedOptions.filter(
    (option) => !value.includes(option),
  );

  return (
    <Root>
      <div {...getRootProps()}>
        {/* <Label {...getInputLabelProps()}>Roles</Label> */}
        <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
          {value.map((option, index) => (
            <StyledTag label={option.title} {...getTagProps({ index })} />
          ))}
          {/* <TextField {...getInputProps()}  placeholder="Roles" /> */}
          <input {...getInputProps()} />
          {value.length > 0 && <StyledCloseIcon {...getClearProps()} />}
          <StyledExpandMoreIcon {...getPopupIndicatorProps()} />
        </InputWrapper>
      </div>
      {availableOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {availableOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option.title}</span>
            </li>
          ))}
        </Listbox>
      ) : null}
    </Root>
  );
};

export default Autocomplete;

const Root = styled("div")(
  ({ theme }) => `
    color: ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.65)"
        : "rgba(0,0,0,.85)"
    };
    font-size: 14px;
  `,
);

// const Label = styled("label")`
//   font-size: 13px;
//   font-weight: 500;
//   display: block;
//   text-align: left;
// `;

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
  `,
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
  `,
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
  `,
);

const Listbox = styled("ul")(
  ({ theme }) => `
    width: 100%;
    margin: 8px 0 0;
    padding: 0;
    // position: absolute;
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
  `,
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
  `,
);

// Engineering roles commonly found in tech companies
const engineeringRoles = [
  { title: "Software Engineer", year: 2023 },
  { title: "DevOps Engineer", year: 2023 },
  { title: "Frontend Developer", year: 2023 },
  { title: "Backend Developer", year: 2023 },
  { title: "Full Stack Developer", year: 2023 },
  { title: "Data Scientist", year: 2023 },
  { title: "Machine Learning Engineer", year: 2023 },
  { title: "Data Engineer", year: 2023 },
  { title: "Network Engineer", year: 2023 },
  { title: "Security Engineer", year: 2023 },
  { title: "Cloud Engineer", year: 2023 },
  { title: "Systems Engineer", year: 2023 },
  { title: "QA Engineer", year: 2023 },
  { title: "Site Reliability Engineer", year: 2023 },
  { title: "Mobile Developer", year: 2023 },
  { title: "Game Developer", year: 2023 },
  { title: "Embedded Systems Engineer", year: 2023 },
  { title: "Hardware Engineer", year: 2023 },
  { title: "UI/UX Designer", year: 2023 },
  { title: "Product Manager", year: 2023 },
  { title: "Technical Writer", year: 2023 },
  { title: "Database Administrator", year: 2023 },
  { title: "Web Developer", year: 2023 },
  { title: "Graphics Designer", year: 2023 },
  { title: "User Interface Designer", year: 2023 },
  { title: "User Experience Designer", year: 2023 },
  { title: "Information Technology Manager", year: 2023 },
  { title: "Software Architect", year: 2023 },
  { title: "Enterprise Architect", year: 2023 },
  { title: "Solution Architect", year: 2023 },
  { title: "Technical Support Specialist", year: 2023 },
  { title: "Business Analyst", year: 2023 },
  { title: "Systems Analyst", year: 2023 },
  { title: "Project Manager", year: 2023 },
];

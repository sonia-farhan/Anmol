const listItemStyle = {
  color: "inherit",
  "&.active": {
    color: "#000000 !important",
    borderRadius: "10px"
  },
  "& .myIconClass, & .MuiTypography-root": {
    color: "#000000"
  }
};

const buttonStyle = {
  "&:hover": {
    color: "#dedede"
  },
  "&:hover .myIconClass, &:hover .MuiTypography-root": {
    color: "#dedede"
  }
};

export { listItemStyle, buttonStyle };

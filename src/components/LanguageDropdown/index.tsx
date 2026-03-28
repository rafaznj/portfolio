import "flag-icons/css/flag-icons.min.css";
import useLanguageDropdown from "./hook";
import {
  StyledContainer,
  StyledButton,
  StyledLabel,
  StyledFlag,
  StyledChevron,
  StyledMenu,
  StyledOption,
  StyledOptionFlag,
} from "./styles";

export default function LanguageDropdown() {
  const { open, setOpen, languages, current, handleChangeLanguage, ref } =
    useLanguageDropdown();

  return (
    <StyledContainer ref={ref}>
      <StyledButton onClick={() => setOpen(!open)}>
        <StyledFlag className={`fi ${current === "pt" ? "fi-br" : "fi-us"}`} />
        <StyledLabel>{current === "pt" ? "PT" : "EN"}</StyledLabel>
        <StyledChevron $open={open}/>
      </StyledButton>

      <StyledMenu $open={open}>
        {languages.map((lang) => (
          <StyledOption
          $isSelected={lang.code === current}
            key={lang.code}
            onClick={() => handleChangeLanguage(lang.code)}
          >
            <StyledOptionFlag className={`fi ${lang.flag}`} />
            <span>{lang.label}</span>
          </StyledOption>
        ))}
      </StyledMenu>
    </StyledContainer>
  );
}
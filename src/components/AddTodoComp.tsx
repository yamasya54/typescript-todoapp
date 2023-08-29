import { Box, Button, Container, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import React, { useState } from "react";

interface IAddTodoComp {
  // addTodo: (text: string) => Promise<void>;
  //!type.d.ts dosyası sayesinde type tanımlaması kısaldı
  addTodo: AddFn;
}

// const AddTodoComp = ({ addTodo }: {addTodo:(text: string) => Promise<void>}) => {
//   // const [text,setText] = useState<string>("")
//   const [text, setText] = useState(""); //! her zaman type belirtmemize gerek yok. Typescript type inference özelliği sayesinde inital değerine göre otomatik type ataması yapıyor.

//   const handleClick = () => {
//     console.log(text);
//     setText("");
//   };

//   return (
//     <Container>
//       <Box
//         sx={{
//           display: { xs: "block", sm: "flex" },
//           justifyContent: "center",
//           m: { xs: 4, sm: "auto" },
//           height: { xs: "120px", sm: "80px" },
//         }}>
//         <TextField
//           id="outlined-basic"
//           label="New Todo"
//           sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
//           variant="outlined"
//           value={text}
//           onChange={e => setText(e.target.value)}
//           inputProps={{ maxLength: 40 }}
//         />
//         <Button
//           variant="contained"
//           onClick={handleClick}
//           disabled={!text.trim()}
//           sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
//           endIcon={<SaveIcon />}>
//           Save Todo
//         </Button>
//       </Box>
//     </Container>
//   );
// };

const AddTodoComp = ({ addTodo }: IAddTodoComp) => {
  // const [text,setText] = useState<string>("")
  const [text, setText] = useState(""); //! her zaman type belirtmemize gerek yok. Typescript type inference özelliği sayesinde inital değerine göre otomatik type ataması yapıyor.

  const handleClick = () => {
    console.log(text);
    addTodo(text)
    setText("");
  };

  return (
    <Container>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: "center",
          m: { xs: 4, sm: "auto" },
          height: { xs: "120px", sm: "80px" },
        }}>
        <TextField
          id="outlined-basic"
          label="New Todo"
          sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
          variant="outlined"
          value={text}
          onChange={e => setText(e.target.value)}
          inputProps={{ maxLength: 40 }}
        />
        <Button
          variant="contained"
          onClick={handleClick}
          // disabled={text === ''}alternatif
          disabled={!text.trim()}
          sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
          endIcon={<SaveIcon />}>
          Save Todo
        </Button>
      </Box>
    </Container>
  );
};

export default AddTodoComp;

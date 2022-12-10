import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./rlist.scss";

const RList = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));

  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div className="rl-main">
      <div className="rl-sub">
        <div className="rl-sub1">
          <div className="rl-second">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                className="d-wrapper"
                startDate={startDate}
                endDate={endDate}
                renderInput={(params) => <TextField {...params} />}
                value={startDate}
                onChange={(e) => {
                  setStartDate(e);
                }}
              />
            </LocalizationProvider>
          </div>

          <div className="rl-second">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                className="d-wrapper"
                startDate={startDate}
                endDate={endDate}
                renderInput={(params) => <TextField {...params} />}
                value={endDate}
                onChange={(e) => {
                  setEndDate(e);
                }}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="rl-fort">
          <div className="rl-row">
            <div className="rs-main">
              <FormControl
                sx={{ m: 1, minWidth: 130 }}
                size="small"
                className="rs-bot"
              >
                <InputLabel id="demo-select-small" className="cur">
                  Currency
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={currency}
                  label="Currency"
                  onChange={handleChange}
                  className="rs-second"
                >
                  <MenuItem value="Php">Phillippine Peso</MenuItem>
                  <MenuItem value="Chinese Yuan">Chinese Yuan</MenuItem>
                  <MenuItem value="Czesh Koruna">Czesh Koruna</MenuItem>
                  <MenuItem value="Danish Krone">Danish Krone</MenuItem>
                  <MenuItem value="Euro">Euro</MenuItem>
                  <MenuItem value="Dollar">U.S Dollar</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RList;

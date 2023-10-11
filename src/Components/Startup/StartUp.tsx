import { Fragment, ReactElement, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Startup } from "../../Types/Startup";

type StartupItemProps = {
    startup : Startup
}

export default function StartupItem(props : StartupItemProps): ReactElement {

  return (
    <Fragment>
      <Card sx={{ minWidth: 275, marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {props?.startup.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Founded: {props?.startup.dateFounded.getFullYear()} | {props?.startup.employees} Employees | {props?.startup.totalFunding} | {props?.startup.currentInvestmentStage}
          </Typography>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {props?.startup.shortDescription}
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
  
}
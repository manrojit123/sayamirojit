<?php
  
  require_once 'simple_html_dom.php';

  $dom = file_get_html('https://www.cricbuzz.com/cricket-series/3148/pakistan-super-league-2020/points-table', false);

  $teams = [];
  $points = [];
  foreach($dom->find("table.cb-srs-pnts") as $pointsTable){
    foreach($pointsTable->find("td.cb-srs-pnts-name") as $trname){
      $teams[] = $trname->plaintext;
    }

    foreach($pointsTable->find('td.cb-srs-pnts-td') as $trpoints){
      $points[] = $trpoints->plaintext;
    }
  }
  

  $standings = [];

  $chunked = array_chunk($points, 7);

  for($i=0; $i<count($teams); $i++){
    $team['team'] = $teams[$i];

    $details = $chunked[$i];

    $team['played'] = $details[0];
    $team['won'] = $details[1];
    $team['lost'] = $details[2];
    $team['tied'] = $details[3];
    $team['noresult'] = $details[4];
    $team['points'] = $details[5];
    $team['nrr'] = $details[6];

    $standings[] = $team;
  }

  header('Content-Type: application/json');  
  echo json_encode($standings);
  
  exit;
?>
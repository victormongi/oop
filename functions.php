<?php

function load_json($filename)
{
  return json_decode(file_get_contents(__DIR__.'/'.$filename), true);
}
<?php

use App\Documentable;

class DocumentStore
{
  protected $data = [];

  public function addDocument(Documentable $document)
  {
    $key = $document->getId();
    $value = $document->getContent();
    $this->data[$key] = $value;
  }

  public function getDocument()
  {
    return $this->data;
  }
}

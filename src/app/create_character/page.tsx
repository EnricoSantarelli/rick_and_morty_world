"use client";
import React, { useContext } from "react";
import { CharacterContext } from "@/contexts/character_provider";

export default function CreateCharacterPage() {
  const { characters } = useContext(CharacterContext);

  return <h1>Create character</h1>;
}

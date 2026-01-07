export type InactiveStandard = {
  pis: string
  beneficioPrevidenciario: string
}

const inactivesStandard: InactiveStandard = {
  pis: "NIT/PIS/PASEP/NIS ou documento oficial que contenha a informação",
  beneficioPrevidenciario: "Declaração de Benefício Previdenciário emitida a partir do site meu.inss.gov.br",
}

export { inactivesStandard }

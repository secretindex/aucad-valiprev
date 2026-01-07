export type InvalidPensioner = {
  "cr/60": string
  "cr/n": string
  "cr/dsc": string
  "dr/n": string
  "pis/18/n": string
  "dips/n": string
  "id/n": string
  "cerc/n": string
  "cav/n": string
  "un/n": string
  "dsvu/n": string
  "idsf/n": string
}

const invalidPensioner: InvalidPensioner = {
  "cr/60": `Comprovante de residência emitido a partir de novembro/2025;\nObs: Comprovante enviado foi emitido em MES. Favor, enviar um comprovante emitido dentro do prazo acima`,
  "cr/n":
    "Comprovante de Residência atualizado (emitido a partir de novembro/2025) ou declaração de residência:\nBaixe neste link 👉 https://storage3.onyxerp.com.br/8f65bb73f2b797fb90cc3f0952f526.docx",
  "cr/dsc":
    "Comprovante de residência emitido nos últimos 60 dias;\nObs: Envie uma conta emitida a partir de novembro de 2025, ou Assine a declaração de residência que se encontra no link abaixo:\n👉 https://storage3.onyxerp.com.br/8f65bb73f2b797fb90cc3f0952f526.docx",
  "dr/n": `Preencha e assine a Declaração de Residência, requerida quando o comprovante possui nome de terceiro.\nBaixe neste link 👉 https://storage3.onyxerp.com.br/8f65bb73f2b797fb90cc3f0952f526.docx`,
  "pis/18/n": "Enviar comprovante de cadastro no PIS/PASEP ou NIT",
  "dips/n": "Enviar declaração de Inacumulabilidade de Pensão (Anexo VIII no link abaixo)",
  "idsf/n": "Documento de Identidade e CPF do ex-servidor (a) falecido(a)",
  "id/n":
    "Qualquer documento de identidade com CPF: RG, CNH, Carteira de Conselhos de Classe ou Carteira de Registro Nacional Migratório (CRNM), se estrangeiro",
  "cerc/n": "Certidão de Casamento",
  "cav/n": "Certidão de casamento averbada",
  "un/n": "Declaração de união estável + Certidão de Nascimento",
  "dsvu/n": "Escritura Pública ou Sentença Declaratória de União Estável",
}

export type PensionerCheck = {
  pis: boolean
  beneficioPrevidenciario: boolean
}

export type StandardPensioner = {
  pis: string
  beneficioPrevidenciario: string
}

const standardPensioner: StandardPensioner = {
  pis: "NIT/PIS/PASEP ou documento oficial que contenha a informação",
  beneficioPrevidenciario: "Declaração de Benefício Previdenciário emitida a partir do site meu.inss.gov.br",
}

export { invalidPensioner, standardPensioner }

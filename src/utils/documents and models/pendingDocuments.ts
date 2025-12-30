export type InvalidDocuments = {
  "cr/60": string
  "cr/n": string
  "cr/dsc": string
  "dr/n": string
  "id/n": string
  "cns/n": string
  "estc/nd": string
  "cerc/n": string
  "cav/n": string
  "un/n": string
  "ctc/np": string
  "inv/nc": string
  "dsvu/n": string
  "dp/21": string
  "dep/id/n": string
  "cnd/n": string
}

const invalidStandard: InvalidDocuments = {
  "cr/60": `Comprovante de residência emitido a partir de novembro de 2025;\nObs: Comprovante enviado foi emitido em MES. Favor, enviar um comprovante dentro do prazo acima`,
  "cr/n":
    "Comprovante de Residência atualizado (emitido a partir de novembro/2025) ou declaração de residência:\nbaixe neste link 👉 https://storage3.onyxerp.com.br/8f65bb73f2b797fb90cc3f0952f526.docx",
  "cr/dsc":
    "Comprovante de residência emitido nos últimos 60 dias;\nObs: Envie uma conta emitida a partir de novembro de 2025, ou assine a declaração de residência que se encontra no link abaixo:\n👉 https://storage3.onyxerp.com.br/8f65bb73f2b797fb90cc3f0952f526.docx",
  "dr/n": `Preencha e assine a Declaração de Residência, requerida quando o comprovante possui nome de terceiro.\nBaixe neste link 👉 https://storage3.onyxerp.com.br/8f65bb73f2b797fb90cc3f0952f526.docx`,
  "id/n":
    "Qualquer documento de identidade com CPF: RG, CNH, Carteira de Conselhos de Classe ou Carteira de Registro Nacional Migratório (CRNM), se estrangeiro",
  "cns/n": "Certidão de Nascimento",
  "estc/nd": `Certidão de acordo com o estado civil:
Casada, Divorciada ou Viúva - Certidão de Casamento (com averbação nos dois últimos casos);
União Estável - Declaração de União Estável ou Declaração de Convivência Marital (com firma reconhecida em cartório);
Solteira - Certidão de nascimento`,
  "ctc/np": `Certidão de Tempo de Contribuição (CTC):
Para fins Para fins de planejamento atuarial e atualização cadastral do Censo, a CTC poderá ser substituída por extrato do CNIS de período anterior ao ingresso no Município, ou pelas páginas da CTPS que contenham os registros de contrato de trabalho (data de início e data fim), ou pelas portarias de nomeação e exoneração para servidores públicos cuja CTPS não registre os vínculos, fica ressalvado que, para a averbação formal e utilização desse tempo na concessão de benefício no VALIPREV, será indispensável a apresentação da CTC original, nos termos da legislação federal aplicável à contagem recíproca`,
  "cerc/n": "Certidão de Casamento",
  "inv/nc": "Enviar qualquer documento que comprove invalidez do dependente DEP",
  "cav/n": "Certidão de casamento averbada",
  "un/n": "Declaração de União Estável/Convivência Marital com firma reconhecida em cartório",
  "dsvu/n": "Declaração de união estável + Certidão de Casamento averbada",
  "dp/21":
    "Em caso de dependente filho(a) com mais de 18 anos, é necessário que se envie laudo/atestado médico caso declarado inválido. Caso não, remover como dependente previdenciário",
  "dep/id/n": "Enviar documento de identificação dos dependentes DEPS",
  "cnd/n": "Enviar certidão de nascimento do dependente DEP",
}

export type InactiveStandard = {
  pis: string
}

export type ActivesStandardType = {
  cpf: string
  pis: string
  beneficioPrevidenciario: string
  uniao: string
}

const activesStandard: ActivesStandardType = {
  cpf: "Qualquer documento contendo número do CPF",
  pis: "NIT/PIS/PASEP ou documento oficial que contenha a informação",
  beneficioPrevidenciario: "Declaração de Benefício Previdenciário emitida a partir do site meuinss.gov.br",
  uniao: "Certidão de União Estável",
}

export { invalidStandard, activesStandard }

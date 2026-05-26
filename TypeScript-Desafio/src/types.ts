export type OperationType = "buy" | "sell";

export interface Operation {
    operation: OperationType;
    "unit-cost": number;
    quantity: number;
}

export interface Estado {
    quantidadeAcoes: number;
    mediaPonderada: number;
}

export interface TaxResult {
    tax: number;
}